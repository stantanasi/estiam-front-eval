import React, {
  createContext,
  useState
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { THEMES } from 'src/constants';
import { storeSettings } from 'src/utils/settings';

const SettingsContext = createContext();

const defaultSettings = {
  theme: THEMES.LIGHT
};

export function SettingsProvider({ settings, children }) {
  const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings);

  const handleSaveSettings = (updatedSettings = {}) => {
    const mergedSettings = _.merge({}, currentSettings, updatedSettings);

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;

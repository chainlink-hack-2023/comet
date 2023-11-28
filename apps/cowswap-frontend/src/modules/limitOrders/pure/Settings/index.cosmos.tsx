import { Settings, SettingsProps } from './index'

const defaultProps: SettingsProps = {
  state: {
    expertMode: true,
    showRecipient: false,
    partialFillsEnabled: true,
    deadlineMilliseconds: 200_000,
    targetNetworkNumber: 5,
    customDeadlineTimestamp: null,
  },
  onStateChanged(state) {
    console.log('Settings state changed: ', state)
  },
}

export default <Settings {...defaultProps} />

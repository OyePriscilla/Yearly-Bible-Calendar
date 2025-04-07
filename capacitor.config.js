const config = {
    appId: 'com.example.app',
    appName: 'Yearly-Bible-Calendar-App',
    webDir: 'dist',
    bundledWebRuntime: false,
    plugins: {
      LocalNotifications: {
        smallIcon: 'ic_stat_icon_config_sample',
        iconColor: '#488AFF',
        sound: 'beep.wav',
      },
    },
};
export default config;

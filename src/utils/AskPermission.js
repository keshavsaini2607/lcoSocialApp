import {PermissionsAndroid, ToastAndroid} from 'react-native'


export const requestPermission = async() => {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            'android.permission.READ_EXTERNAL_STORAGE',
            'android.permission.WRITE_EXTERNAL_STORAGE'
        ])
        console.log("Permission",granted)

        if(
            !granted
        ) {
            ToastAndroid.show('We cannot proceed without permissions',ToastAndroid.LONG)
            requestPermission()
        }

    } catch (error) {
        console.log(error);
    }
}
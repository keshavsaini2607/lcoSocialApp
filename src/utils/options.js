import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const options = {
    title: "Select an image",
    storageOptions: {
        skipBackup: true,
        path: '/*'
    }
}
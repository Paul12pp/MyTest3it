import {Platform} from 'react-native';
import {
  AndroidPermission,
  check,
  IOSPermission,
  PermissionStatus,
  request,
  RESULTS,
} from 'react-native-permissions';

export const usePermissions = () => {
  const checkPermission = async (
    iosPermission: IOSPermission,
    androidPermission: AndroidPermission,
  ): Promise<PermissionStatus> => {
    try {
      if (Platform.OS === 'android') {
        return checkAndroidPermission(androidPermission);
      } else {
        return checkIOSPermission(iosPermission);
      }
    } catch (error) {
      throw error;
    }
  };

  const requestPermission = async (
    iosPermission: IOSPermission,
    androidPermission: AndroidPermission,
  ): Promise<PermissionStatus> => {
    try {
      if (Platform.OS === 'android') {
        return await requestAndroidPermission(androidPermission);
      } else {
        return await requestIOSPermission(iosPermission);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const checkIOSPermission = async (permission: IOSPermission) => {
    try {
      return await check(permission);
    } catch (error) {
      throw error;
    }
  };

  const checkAndroidPermission = async (permission: AndroidPermission) => {
    try {
      return await check(permission);
    } catch (error) {
      throw error;
    }
  };

  const requestAndroidPermission = async (permission: AndroidPermission) => {
    try {
      let status = await checkAndroidPermission(permission);
      if (status === RESULTS.DENIED) {
        status = await request(permission);
      }
      return status;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const requestIOSPermission = async (permission: IOSPermission) => {
    try {
      let status = await checkIOSPermission(permission);
      if (status === RESULTS.DENIED) {
        status = await request(permission);
      }
      return status;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return {
    checkPermission,
    requestPermission,
    checkAndroidPermission,
    checkIOSPermission,
    requestAndroidPermission,
    requestIOSPermission,
  };
};

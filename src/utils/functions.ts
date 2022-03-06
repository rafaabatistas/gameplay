import * as Notifications from 'expo-notifications';

const { CDN_IMAGE } = process.env;

import type User from '../@types/user';

export type UserInfoResponse = {
  data: {
    accent_color: number;
    avatar: string;
    banner: string | null;
    banner_color: string;
    discriminator: string;
    email: string;
    flags: number;
    id: string;
    locale: string;
    mfa_enabled: boolean;
    public_flags: number;
    username: string;
    verified: boolean;
  };
};

export const userInfoFormatting = (userInfo: UserInfoResponse): User => {
  const firstName = userInfo.data.username.split(' ')[0];
  const avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
  const { id, username, email } = userInfo.data;

  return { id, username, avatar, email, firstName };
};

export const schedulePushNotification = async (title: string, body: string, data: any, date: any) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
      data: data
    },
    trigger: date
  });
};

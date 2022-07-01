import axios from "axios";
import { useState } from "react";
import { AsyncStatus } from "../Constants";

export function useGetUserProfile() {
  const [userData, SetUserData] = useState({
    status: AsyncStatus.INITIAL,
    data: null,
    error: null,
  });
  async function getUserProfile(id) {
    try {
      SetUserData({ ...userData, status: AsyncStatus.LOADING });
      const { data } = await axios.get(
        `https://kyro-user-service-mgmqxruica-uc.a.run.app/users/${id}`
      );
      SetUserData({ data: data, error: null, status: AsyncStatus.SUCCESS });
    } catch (error) {
      SetUserData({
        data: null,
        error: error.response.data,
        status: AsyncStatus.ERROR,
      });
    }
  }
  return { getUserProfile, userData };
}

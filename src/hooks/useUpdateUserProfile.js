import axios from "axios";
import { useState } from "react";
import { AsyncStatus } from "../Constants";

export function useUpdateUserProfile() {
  const [updateduserData, SetUserData] = useState({
    status: AsyncStatus.INITIAL,
    data: null,
    error: null,
  });
  async function UpdateUserProfile(id, updatedUserData) {
    try {
      SetUserData({ ...updateduserData, status: AsyncStatus.LOADING });
      const { data } = await axios.put(
        `https://kyro-user-service-mgmqxruica-uc.a.run.app/users/${id}`,
        updatedUserData
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
  return { UpdateUserProfile, updateduserData };
}

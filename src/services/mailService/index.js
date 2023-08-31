import axios from 'axios';

export const addMailToZoho = async (data) => {
  try {
    await axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_EMAIL_COLLECTION_URL,
      data: data,
    });
    return;
  } catch (error) {}
};

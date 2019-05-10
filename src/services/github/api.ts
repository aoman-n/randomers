import axios from 'axios';
import { User } from './models';

interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

const DEFAULT_CONFIG: ApiConfig = {
  baseUrl: 'https://github.com',
  timeout: 7000,
};

const getMembersFactory = (optionConfig: Partial<ApiConfig> = {}) => {
  const config: ApiConfig = {
    ...DEFAULT_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);

  const getMembers = async (organizationName: string) => {
    try {
      const response = await instance.get(`/orgs/${organizationName}/members`);
      if (response.status !== 200) {
        throw new Error('Server Error');
      }
      const members: User[] = response.data;

      return members;
    } catch (err) {
      throw err;
    }
  };

  return getMembers;
};

export default getMembersFactory;

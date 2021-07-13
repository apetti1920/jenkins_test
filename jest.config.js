import {defaults} from "jest-config";

const ret = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  roots: ["__tests__"]
};

export default ret;
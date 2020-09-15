import axios from "axios";
import { getUserBasicInformation } from "../app";

jest.mock("axios");

describe(" can not get user basic information", () => {
  test("should not get users basic information data", async () => {
    axios.get.mockRejectedValue({});
    await expect(getUserBasicInformation()).rejects.toEqual({});
  });
});
describe(" get user basic information", () => {
  test("should get users basic information data", async () => {
    const mockdata = {
      id: 1,
      name: "KAMIL",
      age: 24,
      avatar: "https://inews.gtimg.com/newsapp_match/0/3581582328/0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.",
    };
    axios.get.mockResolvedValue({ data: mockdata });
    await expect(getUserBasicInformation()).resolves.toEqual(mockdata);
  });
});

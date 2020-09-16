import axios from "axios";
import { getUserBasicInformation, getUserEducationInformation } from "../app";

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

describe(" can not get user education information", () => {
  test("should not get users education information data", async () => {
    axios.get.mockRejectedValue({});
    await expect(getUserEducationInformation()).rejects.toEqual({});
  });
});

describe(" get user education information", () => {
  test("should get users basic information data", async () => {
    // TODO feedback: 既然mock的数据不影响测试结果，不需要准备如此复杂的mockdata，这样反而导致代码可读性差
    const mockdata = [
      {
        userId: 1,
        year: "1990",
        title: "I was born in Katowice",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.",
      },
      {
        userId: 1,
        year: "2005",
        title: "Secondary school specializing in artistic",
        description:
          "Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.",
      },
      {
        userId: 1,
        year: "2009",
        title: "First level graduation in Graphic Design",
        description:
          "Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat.",
      },
      {
        userId: 1,
        year: "2012",
        title: "Second level graduation in Graphic Design",
        description: "Ducimus, aliquam tempore autem itaque et accusantium!  ",
      },
    ];
    axios.get.mockResolvedValue({ data: mockdata });
    await expect(getUserEducationInformation()).resolves.toEqual(mockdata);
  });
});

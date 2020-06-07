import proposalApi from "./proposals.api";

localStorage.clear();

const proposals = [
  {
    name: "Hello",
  },
  {
    name: "World",
    author: "Sudo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisi vitae urna placerat sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque lectus nunc, finibus eu accumsan eu, gravida nec lacus. Curabitur pellentesque quis dui et ullamcorper. ",
    vkLink: "http://vk.com/wall_0000",
  },
];

for (let proposal of proposals) {
  proposalApi.createProposal(proposal);
}

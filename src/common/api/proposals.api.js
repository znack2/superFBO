import api from "./api";

const proposalApi = {
  getAllProposals: () => {
    return api.get("proposal");
  },
  getProposalById: (id) => {
    return api.get("proposal", { id });
  },
  createProposal: (proposal) => {
    return api.post("proposal", proposal);
  },
};

export default proposalApi;

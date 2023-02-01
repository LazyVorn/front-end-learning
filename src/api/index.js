//基础路径
const baseUrl = '/api';
const apiVersion = "/v1"
const api = {
    //获取当前用户id
    fetchCurrentUserId: (projectId) => `${baseUrl}/${apiVersion}/projects/${projectId}/weeklyPlan/member/getCurrentUserId`,
};

export default api;
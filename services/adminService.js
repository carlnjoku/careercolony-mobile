import http from './http-commons';
import urlencode from 'urlencode';

class AdminService {
  
  getAllMilestones() {
    return http.get('/project/get_all_milestones');
  }

  approveMilestone(data){
    return http.put("admin/approve_milestone_payment", data)
  }

}

export default new AdminService();

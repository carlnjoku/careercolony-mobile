import http from './http-commons';
import urlencode from 'urlencode';

class UserService {
  userLogin(data) {
    return http.post('/auth/login', data);
  }

  getAllUsers() {
    return http.get('/user/');
  }

  getUser(id) {
    return http.get(`/user/${id}`);
  }

  createUser(data) {
    return http.post('/user', data);
  }

  updateUser(id, data) {
    return http.put(`/user/${id}`, data);
  }

  updateBiodata(data) {
    return http.put('/user/update_biodata', data);
  }
  updateCompanyInfo(data) {
    return http.put('/user/update_company_info', data);
  }

  updateOwnerInfo(data){
    return http.put('/user/update_owner_info', data);
  }

  editContact(data){
    return http.put('/user/edit_contact', data);
  }

  updateProfilebg(data){
    return http.put('/user/update_background_photo', data);
  }
  updateAvatar(data){
    return http.put('/user/update_avatar', data);
  }
  updateLogo(data){
    return http.put('/user/update_logo', data);
  }

  addContact(data){
    return http.put('/user/add_new_con', data);
  }

  saveFreelancer(data){
    return http.put('/user/save_freelancer', data);
  }
  unsaveFreelancer(data){
    return http.put('/user/unsave_freelancer', data);
  }

  getSavedFreelancers(employerId){
    return http.get(`/user/saved_freelancer/${employerId}`);
  }




  deleteUser(id) {
    return http.delete(`/user/${id}`);
  }

  deleteAllUsers() {
    return http.delete(`/user`);
  }

  checkForAuthorization(userType) {
    return http.get(`/user/check_for_authorization/${userType}`);
  }

  checkIfUserExists(email) {
    return http.get(`/user/check_if_user_exist/${email}`);
  }

  checkUserStatus(userType) {
    return http.get(`/user/check_if_user_exist/${userType}`);
  }

  changePassword(data) {
    return http.put('/user/change_password', data);
  }

  userIntro(empId) {
    return http.get(`/user/intro/${empId}`);
  }

  getLimitedDetails(publicId) {
    return http.get(`/user/limited_details/${publicId}`);
  }

  sendEmailConfirmation(data) {
    return http.post('/user/send_email_confirmation', data);
  }

  resendEmailConfirmation(id) {
    return http.get(`/user/update_email_confirmation/${id}`);
  }

  updateEmployerContact(id, data) {
    return http.put(`/user/update_employer_contact/${id}`, data);
  }

  updateMiniProfile() {
    return http.put(`/user/update_profile/${id}`, data);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }

  // Profile

  // Portfolio
  portfolioImages(data){
    return http.post('/profile/add_portfolio', data);
  }
  editPortfolioImages(data){
    return http.put('/profile/edit_portfolio', data);
  }
   getUserPortfolio(userId){
    return http.get(`/profile/get_all_portfolio/${userId}`);
   }

   getPortfolioFiles(portfolioID){
     return http.get(`/profile/get_portfolio_images/${portfolioID}`)
   }

   getSinglePortfolio(portfolioID){
    return http.get(`/profile/get_single_portfolio/${portfolioID}`)
  }

  // Experience
  userExperience(userId) {
    return http.get(`/profile/get_experience/${userId}`);
  }
  // Education
  userEducation(userId) {
    return http.get(`/profile/get_educations/${userId}`);
  }

  // Delete education
  deleteEducation(freelancerId, eduId){
    return http.get(`/profile/delete_education/uid/${freelancerId}/eduId/${eduId}`)
  }
  // Delete experience
  deleteExperience(freelancerId, expId){
    return http.get(`/profile/delete_experience/uid/${freelancerId}/expId/${expId}`)
  }

  // Skills
  userSkills(userId){
    return http.get(`/profile/primary_skills/${userId}`);
  }

  // Update skills
  updateSkills(data){
    return http.put('/profile/add_skills', data);
  }
  // Delete skill
  deleteSkill(freelancerId, skillId){
    return http.get(`/profile/delete_skill/uid/${freelancerId}/skillId/${skillId}`)
  }




  // Projects

  // newJobPost(data, config){
  //   return http.post(`project/new_job_post`, data, config)
  // }
  newjobPost(data, config){
    return http.post(`project/`, data, config)
  }
  firstProject(data) {
    return http.post('/user/send_email_confirmation', data);
  }
  getProjectFeeds(userId){
    return http.get(`project/project_feeds/${userId}`)
  }
  getProjectByTitle(titleId){
    return http.get(`project/tle/${titleId}`)
  }

  getProjectById(projectId){
    return http.get(`project/${projectId}`)
  }
  getProjectByJobId(jobId){
    return http.get(`project/jobId/${jobId}`)
  }
  getProjectByEmployerStatus(status, employerId){
    return http.get(`project/status/${status}/empid/${employerId}`)
  }

  saveJob(data){
    return http.put('/project/save_job', data);
  }
  unsaveJob(data){
    return http.put('/project/unsave_job', data);
  }

  getSavedJobs(userId){
    return http.get(`/project/saved_jobs/${userId}`);
  }
  sendJobInvite(data) {
    return http.post('/project/job_invitation', data);
  }


  postNewProposal(data) {
    return http.post('/project/proposal', data);
  }
  postNewProposalHourly(data) {
    return http.post('/project/new_hourly_proposal', data);
  }


  getMyProposals(userId) {
    return http.get(`/project/proposals/${userId}`);
  }
  getMyActiveProjects(userId) {
    return http.get(`/project/proposals/${userId}`);
  }
  getContractsByStatus(userId, currentPage) {
    return http.get(`/project/get_contracts_by_status/uid/${userId}/currentPg/${currentPage}`);
  }
  getContractsByEmployerStatus(userId, currentPage) {
    return http.get(`/project/get_contracts_by_employer_status/eid/${userId}/currentPg/${currentPage}`);
  }

  pauseContract(data){
    return http.post('/project/pause_contract', data)
  }
  getMyPastProjects(userId) {
    return http.get(`/project/proposals/${userId}`);
  }
  getMyCompletedProjects(userId) {
    return http.get(`/project/proposals/${userId}`);
  }

  getPostCount(userId){
    return http.get(`/project/project_count/${userId}`);
  }
  getMyCompletedProjects(offerId) {
    return http.get(`/project/accept_offer/${offerId}`);
  }

  getProjectFiles(projectId) {
    return http.get(`/project/files/${projectId}`)
  }

  // Contracts

  getContract(contractId){
    return http.get(`/project/get_contract_by_contractId/${contractId}`)
  }
  getContractEscrow(contractId){
    return http.get(`/project/get_contract_escrow_by_contractId/${contractId}`)
  }


  getContractByTitleId(titleId){
    return http.get(`/project/get_contract_by_titleId/${titleId}`)
  }
  getContractByProposalId(proposalId){
    return http.get(`/project/get_contract_by_proposalId/${proposalId}`)
  }
  // getContractByFreelancer(freelancerId, projectTitle){
  //   return http.get(`/project/get_freelancer_contracts/fid/${freelancerId}/projtitle/${projectTitle}`)
  // }
  getContractByFreelancer(freelancerId, contractId){
    return http.get(`/project/get_freelancer_contracts/fid/${freelancerId}/contractId/${contractId}`)
  }

  getHourlyPaymentByFreelancer(freelancerId, proposalId){
    return http.get(`/project/get_freelancer_hourly_payment/fid/${freelancerId}/proposalId/${proposalId}`)
  }

  getHourlyPaymentContractId(contractId){
    return http.get(`/project/get_hourly_payment_contractId/contractId/${contractId}`)
  }

  getContractByEmployerId(employerId){
    return http.get(`/project/get_contracts_by_employerId/empid/${employerId}`)
  }
  getContractByFreelancerId(freelancerId){
    return http.get(`/project/get_contracts_by_freelancerId/freeid/${freelancerId}`)
  }

  changeHourlyRate(data){
    return http.put(`/project/update_hourly_rate`, data);
  }

  changeWeeklyLimit(data){
    return http.put(`/project/update_weekly_limit`, data);
  }

  endProject(data){
    return http.put(`/project/update_end_project`, data);
  }
  editHourlyPayment(data){
    return http.put(`/project/edit_hourly_payment`, data);
  }
  createFeedback(data){
    return http.post(`/project/create_feedback`, data);
  }
  createFeedbackFreelancer(data){
    return http.post(`/project/create_feedback_freelancer`, data);
  }

  getEmployerFeedback(contractId){
    return http.get(`/project/get_feedback_from_employer_by_contractId/${contractId}`)
  }
  getFreelancerFeedback(contractId){
    return http.get(`/project/get_feedback_from_freelancer_by_contractId/${contractId}`)
  }


  getDailyManualTimeLog(contractId){
    return http.get(`/project/get_daily_manual_time/contractId/${contractId}`)
  }
  getDayManualTimeLog(contractId,day){
    return http.get(`/project/get_day_manual_time/contractId/${contractId}/day/${day}`)
  }
  getDailyManualTimeLogEmployer(contractId){
    return http.get(`/project/get_daily_time_log_employer/contractId/${contractId}`)
  }
  // getManualTimeLog(freelancerId, titleId, data){
  //   return http.get(`/project/get_manual_time/fid/${freelancerId}/tid/${titleId}/daysofwk/${data}`)
  // }
  getManualTimeLogCurrentWeek(data){
    return http.post('/project/get_manual_weekly_time', data)
  }
  getManualTimeLogCurrentWeekEmployer(data){
    return http.post('/project/get_manual_weekly_time_employer', data)
  }



  getActivies(id, workbookId){
    return http.get(`/project/get_activity/id/${id}/workbookId/${workbookId}`)
  }
  addNote(data) {
    return http.post('/project/add_note', data);
  }
  addTimeManually(data) {
    return http.post('/project/add_manual_hours_tracked', data);
  }
  updateTimeManually(data) {
    return http.put('/project/update_manual_hours_tracked', data);
  }
  deleteTimeManually(index, workbookId){
    return http.get(`/project/delete_manual_entry/index/${index}/workbookId/${workbookId}`)
  }

  // Milestone
  get_single_milestone(milestoneId){
    return http.get(`/project/milestone/${milestoneId}`);
  }
  delete_single_milestone(milestoneId){
    return http.delete(`/project/milestone/${milestoneId}`);
  }
  edit_single_milestone(data){
    return http.put('/project/edit_milestone', data);
  }

  get_milestones_by_projectId(projectId){
    return http.get(`/project/get_milestones_projectId/${projectId}`);
  }
  get_milestones_by_contractId(contractId){
    return http.get(`/project/get_milestones_contractId/contractId/${contractId}`);
  }
  get_milestones_by_proposalId(proposalId){
    return http.get(`/project/get_milestones_proposalId/proposalId/${proposalId}`);
  }
  get_milestones_by_contractId_hourly(contractId){
    return http.get(`/project/get_milestones_contractId_hourly/contractId/${contractId}`);
  }
  release_milestone(milestoneId){
    return http.get(`/project/release_milestone/${milestoneId}`);
  }

  request_milestone_payment(data){
    return http.post('/project/request_milestone_payment', data);
  }

  payWithPrimaryMethod(data){
    return http.post('/finance/milestone_payment_with_default_payment_method', data);
  }

  getCustomerId(employerId){
    return http.get(`/finance/get_customer_employerId/${employerId}`);
  }



  // Hourly payment
  getCurrentWeekEntries(contractId){
    return http.get(`/project/get_current_week_entries/contractId/${contractId}`);
  }


  get_total_ongoing_milestone(contractId){
    return http.get(`/project/total_ongoing_milestone/${contractId}`);
  }
  get_total_released_milestone(contractId){
    return http.get(`/project/total_released_milestone/${contractId}`);
  }
  get_total_milestone(contractId){
    return http.get(`/project/total_milestone/${contractId}`);
  }
  get_ongoing_milestones(contractId){
    return http.get(`/project/get_ongoing_milestones/${contractId}`);
  }

  get_hourly_payment_by_Id(hourlyPaymentId){
    return http.get(`/project/get_hourly_payment_by_id/hourly_paymentId/${hourlyPaymentId}`);
  }
  get_hourly_payment_by_proposalId(proposalId){
    return http.get(`/project/get_hourly_payment_proposalId/proposalId/${proposalId}`);
  }

  raiseInvoice(data){
    return http.post('/project/raise_invoice', data);
  }

updateHourlyRate(data){
  return http.put('/project/updateHourlyRate', data)
}
updateWeeklyLimit(data){
  return http.put('/project/update_weekly_limit', data)
}
updateHourlyStartDate(data){
  return http.put('/project/update_start_date', data)
}
updateHourlyTaskDescription(data){
  return http.put('/project/update_task_description', data)
}



  releaseMilestone(data){
    return http.put(`/project/release_milestone`, data)
  }
  changeMilestone(data){
    return http.put(`/project/change_milestone`, data)
  }
  acceptMilestone(data){
    return http.put(`/project/accept_milestone`, data)
  }
  askForChange(data){
    return http.put(`/project/ask_for_change`, data)
  }
  requestMilestoneCancellation(data){
    return http.put(`/project/request_milestone_cancellation`, data)
  }
  acceptCancelMilestone(data){
    return http.put(`/project/accept_milestone_cancellation`, data)
  }
  declineCancelRequest(data){
    return http.put(`/project/decline_milestone_cancellation`, data)
  }
  addMilestone(data){
    return http.put(`/project/add_milestones`, data)
  }
  getDeliveryLogs(projectId){
    return http.get(`/project/get_delivery_logs/projectId/${projectId}`)
  }


  declineOffer(contractId){
    return http.get(`/project/decline_offer/${contractId}`)
  }
  acceptOffer(contractId){
    return http.get(`/project/accept_offer/${contractId}`)
  }

  // //Project chat message logs
  // getChatMessages(proposalId) {
  //   return http.get(`/chat/get_chat_messages/${room}?limit=${limit}&page=${page}`);
  // }


  // Chat services
  getChatLog(roomid, limit) {
    return http.get(`/chat/get_chat_messages/room/${roomid}?limit=${limit}`);
  }

  // Chat services
  getChatLogLazyLoading(room, offset, limit) {
    return http.get(`/chat/get_chat_messages_lazy_loading/${room}?offset=${offset}&limit=${limit}`);
  }

  getSingleRoomDetails(room) {
    return http.get(`/chat/get_single_room_details/${room}`);
  }
  getActiveRoomByUser(userId) {
    return http.get(`/chat/get_rooms_by_user/${userId}/l_i_r/98821144`);
  }
  getActiveRoomByEmployer(userId){
    return http.get(`/chat/get_rooms_by_employer/${userId}/l_i_r/98821144`);
  }
  getRoomMembers(room) {
    return http.get(`/chat/list_room_members/${room}`);
  }

  uploadFileChat(data, options, config) {
    return http.post('/chat/chat_file_uploads', data, options, config);
  }

  //Project/contract deliverables
  getDeliveries(proposalId) {
    return http.get(`/project/get_project_delivery_by_proposalId/${proposalId}`);
  }

  getProposalByProjectId(projectId){
    return http.get(`/project/proposal/pid/${projectId}`);
  }


  // Invoice
  createInvoce(data){
    return http.post('/finance/create_invoice', data);
  }

  getInvoice(invoiceId){
    return http.get(`/finance/get_invoice/${invoiceId}`);
  }

  getPendingInvoice(invoiceId){
    return http.get(`/finance/get_pending_invoice/${invoiceId}`);
  }
  getInvoiceByMilestoneId(milestoneId){
    return http.get(`/finance/get_invoice_by_milestoneId/${milestoneId}`);
  }

  getInvoice1(invoiceId){
    return http.get(`/finance/get_invoice_1/${invoiceId}`);
  }

  getContractInvoice(contractId){
    return http.get(`/project/get_a_contract_invoice/${contractId}`);
  }

  getIncomingPayment(freelancerId){
    return http.get(`/project/get_incoming_payment/${freelancerId}`);
  }
  getOutgoingPayment(payeeToken){
    return http.get(`/project/get_outgoing_payment/${payeeToken}`);
  }



  createInitialMilestone(data){
    return http.post('/finance/initial_milestone_payment', data)
  }
  createInitialMilestoneDefaultMilestoneMethod(data){
    return http.post('/finance/initial_milestone_payment_with_default_payment_method', data)
  }
  createInitialMilestoneAvailableBal(data){
    return http.post('/finance/initial_milestone_payment_with_available_balance', data)
  }

  createMilestone(data){
    return http.post('/finance/milestone_payment', data)
  }
  createMilestoneDefaultMilestoneMethod(data){
    return http.post('/finance/milestone_payment_with_default_payment_method', data)
  }
  createInitialAvailableBal(data){
    return http.post('/finance/milestone_payment_with_available_balance', data)
  }







  // Payment

  getPaymentByContractID(freelancerId, contractId){
    return http.get(`/project/get_contract_payments/fid/${freelancerId}/cid/${contractId}`);
  }

  getUnpaidPaymentByContractID(freelancerId, contractId){
    return http.get(`/project/get_unpaid_contract_payments/fid/${freelancerId}/cid/${contractId}`);
  }
  getPaymentByContractIDEmp(contractId){
    return http.get(`/project/get_contract_payments/contractId/${contractId}`);
  }
  getTotalHoursCurrentWeek(contractId){
    return http.get(`/project/total_hours_tracked_current_week/${contractId}`);
  }
  getTotalHoursPrevWeek(contractId,monday_of_previous_week){
    return http.get(`/project/total_hours_tracked_previous_week/${contractId}/monday/${monday_of_previous_week}`);
  }


  getTotalEarning(payeeToken){
    return http.get(`/finance/get_total_earning/${payeeToken}`);
  }

  createDispute(data){
    return http.post('/project/create_dispute', data)
  }
  updateFundReqest(data){
    return http.put('/project/update_fund_request', data)
  }


  // Billing
  createPayee(data){
    return http.post('/finance/create_payee', data);
  }

  getPayeeToken(freelancerId) {
    return http.get(`/finance/get_payee_token/${freelancerId}`)
  }

  getPayeePaymentMethods(payeeToken) {
    return http.get(`/finance/get_a_user_payment_methods/${payeeToken}`)
  }

  updatePaymentMethod(data){
    return http.put('/finance/update_payment_method', data);
  }
  createNewPaymentMethod(data){
    return http.post('/finance/create_payment_method', data);
  }
  createPaymentMethodHourlyPayment(data){
    return http.post('/finance/create_payment_method_hourly_payment', data);
  }
  createPaymentMethodDefaultMethod(data){
    return http.post('/finance/create_payment_default_payment_method', data);
  }


  createTransfer(data){
    return http.post('/finance/create_transfer', data);
  }

  createBankCard(data) {
    return http.post('/finance/create_bank_card', data);
  }
  createPaypalAccount(data) {
    return http.post('/finance/create_paypal_account', data);
  }

  getSinglePaymentMethod(paymentMethodId){
    return http.get(`/finance/get_single_payment_method/${paymentMethodId}`)
  }

  getUserConfig(payeeToken){
    return http.get(`/finance/transfer_configuration/${payeeToken}`)
  }

  fileUploads(data){
    return http.post('/file_upload/upload_files', data)
  }

  getNotification(userId){
    return http.get(`/user/get_notification/${userId}`)
  }



}

export default new UserService();

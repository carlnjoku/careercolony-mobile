import http from './http-commons-email';
import urlencode from 'urlencode';

class UserEmailService {
 
  request_milestone_payment(data){
    return http.post('/request_milestone_payment', data);
  }

}

export default new UserEmailService();

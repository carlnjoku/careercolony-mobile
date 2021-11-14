import io from 'socket.io-client';
const baseUrl = 'http://localhost:5001';


class SockertioService {
    privateConnection() {
      return io.connect(`${baseUrl}/private`)
    }
    proposalNotification(){
      return io.connect(`${baseUrl}/private`)
    }
  }
export default new SockertioService();

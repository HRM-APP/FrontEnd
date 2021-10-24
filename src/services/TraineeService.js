import axios from 'axios';

const TRAINEE_API_BASE_URL = "http://localhost:8080/api/v1/trainees";

class TraineeService {

    getTrainees(){
        return axios.get(TRAINEE_API_BASE_URL);
    }

    createTrainee(trainee){
        return axios.post(TRAINEE_API_BASE_URL, trainee);
    }

    getTraineeById(traineeId){
        return axios.get(TRAINEE_API_BASE_URL + '/' + traineeId);
    }

    updateTrainee(trainee, traineeId){
        return axios.put(TRAINEE_API_BASE_URL + '/' + traineeId, trainee);
    }

    deleteTrainee(traineeId){
        alert(`Trainee with Id ${traineeId} has removed`);
        return axios.delete(TRAINEE_API_BASE_URL + '/' + traineeId);
    }
}

export default new TraineeService();

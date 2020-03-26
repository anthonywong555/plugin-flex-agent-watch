const ACTION_SET_WORKER_STATES = 'SET_WORKER_STATES';
const ACTION_SET_WORKER_LIST = 'SET_WORKER_LIST';
const ACTION_UPDATE_WORKER_STATE = 'UPDATE_WORKER_STATE';
const ACTION_UPDATE_WORKER_STATE_QUEUES = 'UPDATE_WORKER_STATE_QUEUES';

const initialState = {
  workerStates : [],
  workers: [],
  queues: []
}

export class Actions {
  static setWorkerState = workerStates => ({ type: ACTION_SET_WORKER_STATES, workerStates })
  static setWorkersList = workers => ({ type: ACTION_SET_WORKER_LIST, workers })
  static updateWorker = aWorkerEvent => ({ type: ACTION_UPDATE_WORKER_STATE, aWorkerEvent })
  static updateWorkerStateQueues = () => ({ type: ACTION_UPDATE_WORKER_STATE_QUEUES })
}

export function reduce(state = initialState, action) {
  switch(action.type) {
    case ACTION_SET_WORKER_STATES:
      // Sort the Worker States based on available == true
      action.workerStates.sort((a, b) => b.available - a.available);

      return {
        ...state,
        workerStates: action.workerStates
      };
    case ACTION_SET_WORKER_LIST:
      return {
        ...state,
        workers: Object.values(action.workers)
      };
    case ACTION_UPDATE_WORKER_STATE:
      const aWorkerEvent = action.aWorkerEvent.value;

      const workers = state.workers.map(item => {
        if(item.worker_sid === aWorkerEvent.worker_sid) {
          return {
            ...item,
            activity_name: aWorkerEvent.activity_name
          }
        }
        return item;
      })

      return {
        ...state,
        workers
      }
    case ACTION_UPDATE_WORKER_STATE_QUEUES:
      // Buiding 
      const newQueue = state.workerStates.map(aQueue => ({...aQueue, workers: [], quantity: 0}));

      for(const aWorker of state.workers) {
        const aQueue = newQueue.find(e => aWorker.activity_name === e.name);

        aQueue.workers.push(aWorker);
        aQueue.quantity++;
      }
      
      return {
        ...state,
        queues: newQueue
      }
      
    default:
      return state;
  }
};
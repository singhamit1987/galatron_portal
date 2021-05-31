import { ORDERDETAILS_JSON} from '../../constant/translate'



const checkMessage = (msg, msgText = null) => {
  switch (msg) {
    case 'success':
      return (<div class="succes">{ORDERDETAILS_JSON.success} {msgText} {ORDERDETAILS_JSON.successfully}.</div>)
      break;

    case 'failure':
      return (<div class="danger">{ORDERDETAILS_JSON.failure}</div>)
      break;

    case 'vaidateFeild':
      return (<div class="danger">{ORDERDETAILS_JSON.please_enter} {msgText}</div>)

    default:
      return false
  }
}

export default checkMessage;
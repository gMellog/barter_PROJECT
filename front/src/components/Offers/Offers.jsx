import CardSwap from '../CardSwap/CardSwap'
import { authHeader } from "../../helpers/authHeader";
import io from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeDeal, getUserDeals, setDeals } from '../../redux/actions/dealsAC';
import style from "./Offers.module.css"

let socket;
const ENDPOINT = 'http://localhost:4000/';


function bindUserAndProduct(participant) {

  return {
    user: participant.userID,
    product: participant.productID,
    ready: participant.ready
  }
}

export default function Offers() {
  const user = useSelector(state => state.user);
  let deals = useSelector(state => state.deals);
  deals = [...deals.filter(deal => !deal.declined), ...deals.filter(deal => deal.declined)];
  console.log('DEAAAAAAAAAAALS ', deals);


  const drawDeal = (deal) => {
      let currUser;
      let anotherUser;
      console.log('DEALqweqweqweqwewq ', deal);
      if (deal.participants[0].userID.id === user.id) {
        currUser = bindUserAndProduct(deal.participants[0])
        anotherUser = bindUserAndProduct(deal.participants[1])
      }
      else {
        currUser = bindUserAndProduct(deal.participants[1])
        anotherUser = bindUserAndProduct(deal.participants[0])
      }

      console.log(anotherUser.product);

      return (
        <div>
          <CardSwap socket={socket} currUser={currUser} anotherUser={anotherUser} deal={deal} ></CardSwap>
        </div>
      );
  };

  

  const dispatch = useDispatch();


  useEffect(() => {


    if(user)
    {
      socket = io(ENDPOINT, {
        extraHeaders: authHeader()
      });
      
          socket.on('dealChanged', deal => {
            dispatch(changeDeal(deal));
          });

      socket.emit('deals', user.id, (newDeals) => {
        dispatch(setDeals(newDeals));
      });
    }

  },[]);

  return (
    <div className={style.wrapper}>

    {
    !deals.length ?
      <p>На данный момент предложений нет</p>
      :
      deals.map(deal => drawDeal(deal))
    }
    </div>
  )
}

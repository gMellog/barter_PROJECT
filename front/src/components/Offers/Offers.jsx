import CardSwap from '../CardSwap/CardSwap'

import { authHeader } from "../../helpers/authHeader";

import io from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeDeal, getUserDeals, setDeals } from '../../redux/actions/dealsAC';


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
  const deals = useSelector(state => state.deals);
  const dispatch = useDispatch();


  useEffect(() => {

    //dispatch(getUserDeals());

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
    <>

    {deals ?
      <p>На данный момент предложений нет</p>
      :
      deals.length >= 1 && deals.map(deal => {

        let currUser;
        let anotherUser;

        if (deal.participants[0].userID.id === user.id) {
          currUser = bindUserAndProduct(deal.participants[0])
          anotherUser = bindUserAndProduct(deal.participants[1])
        }
        else {
          currUser = bindUserAndProduct(deal.participants[1])
          anotherUser = bindUserAndProduct(deal.participants[0])
        }

        return (
          <div>
            <CardSwap socket={socket} currUser={currUser} anotherUser={anotherUser} deal={deal} ></CardSwap>
          </div>
        );
      })
    }
    </>
  )
}

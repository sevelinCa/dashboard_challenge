import React from 'react';

const OrderItem = ({ num, customer, order, cost, dueDate, rating, status }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <div>{num}</div>
      <div>{customer}</div>
      <div className="text-blue-500">{order}</div>
      <div>{cost}</div>
      <div>{dueDate}</div>
      <div>{rating}</div>
      <div className={`text-${status === 'Completed' ? 'green' : 'yellow'}-500`}>{status}</div>
    </div>
  );
};

export default OrderItem;

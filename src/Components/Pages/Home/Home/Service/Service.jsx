import Avatar from '@mui/material/Avatar';
import React from 'react';
import ReusableButton from '../../../../ReusableFunction/ReusableButton';

const Service = () => {
    return (
      <div className="">
        <div className="text-center">
          <h1 className="font-bold text-[#16A7FC] dark:text-white">SERVICES</h1>
          <p className=" font-extrabold dark:text-white">
            Our services for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-5 dark:bg-black space-y-2 dark:text-white bg-[#FFFFFF]">
            <Avatar
              className="mx-auto"
              src="https://i.ibb.co.com/DDkBnhDg/Icon2.png"
            ></Avatar>
            <h1 className="text-center md:text-xl text-base font-semibold md:font-bold">
              For Business{' '}
            </h1>
            <p className="text-[#7B7A8B] dark:text-white text-xs">
              We give you complete reliable delivery for your company. We will
              take full responsibility of the deliveries.
            </p>
            <ul className="text-[#7B7A8B] space-y-1 dark:text-white text-xs">
              <li>Corporate goods</li>
              <li>Shipment</li>
              <li>Accesories</li>
            </ul>
            <ReusableButton
              className="w-full border rounded bg-green-400 text-black text-sx md:text-xl font-semibold"
              text="Learn more"
            ></ReusableButton>
          </div>
          <div className="p-5 dark:bg-black dark:text-white space-y-2 bg-[#FFFFFF]">
            <Avatar
              className="mx-auto"
              src="https://i.ibb.co.com/5WzTd0zh/i-CON.png"
            ></Avatar>
            <h1 className=" text-center md:text-xl text-base font-semibold md:font-bold">
              For Household{' '}
            </h1>
            <p className="text-[#7B7A8B] dark:text-white text-xs">
              Offering home delivery around the city, where your products will
              be at your doorstep within 48-72 hours.
            </p>
            <ul className="text-[#7B7A8B] space-y-1 dark:text-white text-xs">
              <li>Personal items</li>
              <li>Percels</li>
              <li>Documents</li>
            </ul>
            <ReusableButton
              className="w-full border rounded bg-green-400 text-black text-sx md:text-xl font-semibold"
              text="Learn more"
            ></ReusableButton>
          </div>
          <div className="p-5 bg-[#FFFFFF]  space-y-2 dark:bg-black dark:text-white">
            <Avatar
              className="mx-auto"
              src="https://i.ibb.co.com/TBNXTnCj/Icon3.png"
            ></Avatar>
            <h1 className="text-center md:text-xl text-base font-semibold md:font-bold">
              For Personal{' '}
            </h1>
            <p className="text-[#7B7A8B] dark:text-white text-xs">
              You can trust us to safely deliver your most sensitive documents
              to the specific area in a short time.
            </p>
            <ol className="text-[#7B7A8B]  space-y-1 md:text-xs dark:text-white ">
              <li>Gifts</li>
              <li>Package</li>
              <li>Documents</li>
            </ol>
            <ReusableButton
              className="w-full border rounded bg-green-400 text-black text-sx md:text-xl font-semibold"
              text="Learn more"
            ></ReusableButton>
          </div>
        </div>
      </div>
    )
};

export default Service;
'use client';

import {
  ADCheckBox,
  ADRectangle,
} from '@/assets/icons/newIconSet/checkBox_starOutLine';
import Image from 'next/image';
import React, { useState } from 'react';
import ProductImage from '@/assets/img/product.png';
import { useMediaQuery } from '@mantine/hooks';

interface CardProps {
  title: string;
  nsln: string;
  condition: string;
  size: string;
  color: string;
  quantity: number;
}

const Card: React.FC<CardProps> = ({
  title,
  nsln,
  condition,
  size,
  color,
  quantity,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const matches = useMediaQuery('(min-width: 361px)');

  return (
    <section className={`${matches ? 'gap-24' : 'gap-8'} flex `}>
      <div className=" cursor-pointer" onClick={() => setChecked(!checked)}>
        {checked ? (
          <ADCheckBox height={20} width={20} color={'#0B80CC'} />
        ) : (
          <ADRectangle height={20} width={20} />
        )}
      </div>

      <Image
        className="h-[120px] w-[120px] md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px]"
        src={ProductImage}
        alt=""
      />

      <div className="flex flex-col gap-4">
        <h6
          className={`${
            matches ? null : 'body_sb'
          } break-words pb-4  text-blue_1 `}>
          {title}
        
        </h6>

        <p className={`${matches ? null : 'caption'} flex`}>
          <span className=" text-light_action">NSLN:&nbsp;</span>
          <span className="text-dark_action">{nsln}</span>
        </p>

        <p className={`${matches ? null : 'caption'} flex`}>
          <span className="text-light_action">Condition:&nbsp;</span>
          <span className="text-dark_action">{condition}</span>
        </p>

        <p className={`${matches ? null : 'caption'} flex`}>
          <span className="text-light_action">Size:&nbsp;</span>
          <span className="text-dark_action">{size}</span>
        </p>

        <p className={`${matches ? null : 'caption'} flex`}>
          <span className="text-light_action">Color:&nbsp; </span>
          <span className="text-dark_action">{color} </span>
        </p>

        {checked ? (
          <>
            {' '}
            <label className="mt-12 text-dark_action">
              How many items do you want to cancel?
            </label>
            <div className="mt-4 flex  items-center gap-8">
              <input
                className="h-48 max-w-[300px] border border-light_border focus:ring-light_border"
                type="text"
              />{' '}
              <span className=" text-body_1">/2</span>
            </div>
          </>
        ) : (
          <p className={`${matches ? null : 'caption'} flex`}>
            <span className="text-light_action">Quantity:&nbsp;</span>
            <span className="text-dark_action">{quantity}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default Card;

'use client';
import Image from 'next/image';
import React from 'react';
import ProductImage from '@/assets/img/product.png';
import {
  ADArrowDown,
  ADMinus,
  ADPlus,
} from '@/assets/icons/newIconSet/plus_printer';
import ErrorText from '../errors/ErrorText';
import { ADTrash } from '@/assets/icons/newIconSet/category_filledMenu';
import { ADHeartOutline } from '@/assets/icons/newIconSet/saveOutline_share';
import { ADCart } from '@/assets/icons/newIconSet/loading_cart';

interface Card1Props {
  title?: string;
}

const Card1: React.FC<Card1Props> = () => {
  return (
    <section className="mt-44 flex px-20">
      <div className="flex gap-24">
        <Image
          className="h-[120px] w-[120px] md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px]"
          src={ProductImage}
          alt=""
        />
        <div className="flex flex-col gap-4">
          <p className="h7 mb-12">
            EE PAY AS YOU GO 4G prepaid sim card with preloaded US $150.50 for
            calls, everyhting in one package
          </p>
          <p className={` flex`}>
            <span className=" text-light_action">Condition: </span>
            <span className="text-dark_action">New without tags</span>
          </p>
          <p className={` flex`}>
            <span className=" text-light_action">Size: </span>
            <span className="text-dark_action">M</span>
          </p>
          <p className={` flex`}>
            <span className=" text-light_action">Color: </span>
            <span className="text-dark_action">Blue</span>
          </p>

          <div className=" mb-8 mt-24 flex max-w-[104px] items-center justify-center gap-16 rounded border border-[#F8F8F8]">
            {/* Increase BTN */}
            <button className=" bg-light_gray_bg p-[11px]">
              <ADMinus height={10} width={10} />
            </button>
            <input
              className="w-full border-0 p-0 text-center focus:outline-none focus:ring-0 disabled:border"
              type="text"
              value={1}
            />
            {/* Decrease BTN */}
            <button className=" bg-light_gray_bg p-[11px]">
              <ADPlus height={10} width={10} color="#585866" />
            </button>
          </div>
          <ErrorText text="Ending soon - Time left 12h 34m" />
        </div>
      </div>
      <div>
        <div className="flex flex-col  gap-16">
          <p className={` flex justify-end gap-16  break-normal`}>
            <span className=" text-light_action">US $12,345.67 </span>
            <span className="h7 text-dark_action">US $1,234.56</span>
          </p>{' '}
          <p className={` flex justify-end gap-8 break-normal`}>
            <span className="  text-light_action">Delivery: </span>
            <span className="h7 text-dark_action">US $ 80.09</span>
          </p>{' '}
          <p className={` flex justify-end gap-8 break-normal`}>
            <span className=" break-normal text-light_action">
              Economy delivery:{' '}
            </span>
            <span className="body_sb break-normal text-green_3">
              Delivers May 22 - May 29
            </span>
            <ADArrowDown height={20} width={20} />
          </p>
        </div>
        <div className="mt-44 flex min-w-[398px] justify-end gap-16">
          <button className="flex items-center gap-8">
            <ADCart height={13.5} width={18} />
            <span>Add to cart</span>
          </button>
          <div className="h-24 w-[1px] bg-light_border"></div>
          <button className="flex items-center gap-8">
            <ADHeartOutline height={14} width={15} />
            <span>Save for later</span>
          </button>
          <div className="h-24 w-[1px] bg-light_border"></div>
          <button className="flex items-center gap-8">
            <ADTrash height={'14.3'} width={15} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card1;

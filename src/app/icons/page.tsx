'use client';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// 1st Line
import {
  ADCalender,
  ADCategories,
  ADDocument,
  ADFilledMenu,
  ADFolder,
  ADHamburgerMenu,
  ADMenu,
  ADSearch,
  ADTrash,
} from '@/assets/icons/newIconSet/category_filledMenu';

//2nd Line
import {
  ADArrowCheck,
  ADArrowDown,
  ADArrowDropdown,
  ADArrowLeft,
  ADArrowMultipllcation,
  ADFilledArrowDropdown,
  ADMinus,
  ADPlus,
  ADPrinter,
} from '@/assets/icons/newIconSet/plus_printer';

// 3rd Line
import {
  ADCalendarFilled,
  ADCheck,
  ADDots,
  ADHand,
  ADInfo,
  ADPlusCircle,
  ADRefresh,
  ADThreeDots,
  ADWarning,
} from '@/assets/icons/newIconSet/warning_threeDots';

// 4th Line
import {
  ADBid,
  ADEnter,
  ADFilledLocation,
  ADFilledTag,
  ADFilledTagBC,
  ADFilter,
  ADLocation,
  ADTag,
  ADThreeFilledCategory,
} from '@/assets/icons/newIconSet/enter_threeFilledCategory';

//5th line
import {
  ADArrowRight,
  ADEye,
  ADEyeClosed,
  ADHeartFilled,
  ADHeartOutline,
  ADRate,
  ADSaveOutline,
  ADShare,
  AdLocationRound,
} from '@/assets/icons/newIconSet/saveOutline_share';

// 6th Line
import {
  ADCheckBox,
  ADCircle,
  ADCircleDot,
  ADCloudFilled,
  ADRectangle,
  ADSend,
  ADSendOutline,
  ADStarFilled,
  ADStarOutline,
} from '@/assets/icons/newIconSet/checkBox_starOutLine';

// 7th Line
import {
  ADComment,
  ADCrossRounded,
  ADGraph,
  ADIncomingCall,
  ADNotification,
  ADOutgoingCall,
  ADProfile,
  ADSms,
} from '@/assets/icons/newIconSet/incomingCall_crossRounded';

//8th Line
import {
  ADAddAccount,
  ADAddCard,
  ADBack,
  ADCheckMarkOutline,
  ADClip,
  ADCustomerCare,
  ADEdit,
  ADLeftArrow,
  ADRightArrow,
  ADUpArrow,
} from '@/assets/icons/newIconSet/back_clip';

// 9th Line
import {
  ADArrRight,
  ADCard,
  ADCart,
  ADFrame,
  ADLoading,
  ADUTurn,
  ADVan,
} from '@/assets/icons/newIconSet/loading_cart';

// Social
import {
  ADApple,
  ADEmail,
  ADFacebook,
  ADFilledFacebook,
  ADFilledTwitter,
  ADGoogle,
  ADPinterest,
  ADTwitter,
} from '@/assets/icons/newIconSet/social';
import { ADBarCode, ADCheckCircle, ADDocCircle, ADEmailCircle, ADImageGray, ADPrinterCircle, ADVisaSmall } from '@/assets/icons/statusIcon/img_visa';
import { ADAmericanEx, ADDiscover, ADMasterCard, ADVisa } from '@/assets/icons/statusIcon/cardsIcons';

const Icons = () => {
  const icon = 'cursor-pointer';
  return (
    <section className="mx-auto mt-44 max-w-5xl ">
      {/* New icon set  */}
      <section>
        <h2 className="mb-5 text-2xl">New Icon Set</h2>
        <div className="flex flex-wrap items-center gap-5">
          {/* 1st  Line*/}
          <CopyToClipboard text="<ADPlus height={20} width={20} />">
            <div className={icon}>
              <ADPlus height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADArrowDown height={20} width={20} />">
            <div className={icon}>
              <ADArrowDown height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADArrowLeft height={20} width={20} />">
            <div className={icon}>
              <ADArrowLeft height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADArrowMultipllcation height={20} width={20} />">
            <div className={icon}>
              <ADArrowMultipllcation height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADArrowCheck height={20} width={20} />">
            <div className={icon}>
              <ADArrowCheck height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADArrowDropdown height={20} width={20} />">
            <div className={icon}>
              <ADArrowDropdown height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="  <ADFilledArrowDropdown height={20} width={20} />">
            <div className={icon}>
              <ADFilledArrowDropdown height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADMinus height={20} width={20} />">
            <div className={icon}>
              <ADMinus height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADPrinter height={20} width={20} />">
            <div className={icon}>
              <ADPrinter height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADWarning height={20} width={20} />">
            <div className={icon}>
              <ADWarning height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADPlusCircle height={20} width={20} />">
            <div className={icon}>
              <ADPlusCircle height={20} width={20} />
            </div>
          </CopyToClipboard>

          {/* 2nd  Line*/}

          <CopyToClipboard text="<ADInfo height={20} width={20} />">
            <div className={icon}>
              <ADInfo height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADRefresh height={20} width={20} />">
            <div className={icon}>
              <ADRefresh height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADDots height={20} width={20} />">
            <div className={icon}>
              <ADDots height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADHand height={20} width={20} />">
            <div className={icon}>
              <ADHand height={27} width={27} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADCheck height={20} width={20} />">
            <div className={icon}>
              <ADCheck height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADCalendarFilled height={20} width={20} />">
            <div className={icon}>
              <ADCalendarFilled height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADThreeDots height={20} width={20} />">
            <div className={icon}>
              <ADThreeDots height={20} width={20} />
            </div>
          </CopyToClipboard>

          {/* 3rd Line */}
          <CopyToClipboard text="<ADCategories height={20} width={20} />">
            <div className={icon}>
              <ADCategories height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADTrash height={20} width={20} />">
            <div className={icon}>
              <ADTrash height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADHamburgerMenu height={20} width={20} />">
            <div className={icon}>
              <ADHamburgerMenu height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADFolder height={20} width={20} />">
            <div className={icon}>
              <ADFolder height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADDocument height={20} width={20} />">
            <div className={icon}>
              <ADDocument height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADMenu height={20} width={20} />">
            <div className={icon}>
              <ADMenu height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADSearch height={20} width={20} />">
            <div className={icon}>
              <ADSearch height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADCalender height={20} width={20} />">
            <div className={icon}>
              <ADCalender height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADFilledMenu height={20} width={20} />">
            <div className={icon}>
              <ADFilledMenu height={20} width={20} />
            </div>
          </CopyToClipboard>

          {/* 4th Line */}
          <CopyToClipboard text="<ADEnter height={20} width={20} />">
            <div className={icon}>
              <ADEnter height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADFilledTag height={20} width={20} />">
            <div className={icon}>
              <ADFilledTag height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADBid height={20} width={20} />">
            <div className={icon}>
              <ADBid height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADLocation height={20} width={20} />">
            <div className={icon}>
              <ADLocation height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADFilledLocation height={20} width={20} />">
            <div className={icon}>
              <ADFilledLocation height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADTag height={20} width={20} />">
            <div className={icon}>
              <ADTag height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADFilledTagBC height={20} width={20} />">
            <div className={icon}>
              <ADFilledTagBC height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADFilter height={20} width={20} />">
            <div className={icon}>
              <ADFilter height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADThreeFilledCategory height={20} width={20} />">
            <div className={icon}>
              <ADThreeFilledCategory height={20} width={20} />
            </div>
          </CopyToClipboard>

          {/* 5th Line */}
          <CopyToClipboard text="<ADSaveOutline height={20} width={20} />">
            <div className={icon}>
              <ADSaveOutline height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADHeartFilled height={20} width={20} />">
            <div className={icon}>
              <ADHeartFilled height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADHeartOutline height={20} width={20} />">
            <div className={icon}>
              <ADHeartOutline height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADEyeClosed height={20} width={20} />">
            <div className={icon}>
              <ADEyeClosed height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<AdLocationRound height={20} width={20} />">
            <div className={icon}>
              <AdLocationRound height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADEye height={20} width={20} />">
            <div className={icon}>
              <ADEye height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADArrowRight height={20} width={20} />">
            <div className={icon}>
              <ADArrowRight height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADRate height={20} width={20} />">
            <div className={icon}>
              <ADRate height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADShare height={20} width={20} />">
            <div className={icon}>
              <ADShare height={20} width={20} />
            </div>
          </CopyToClipboard>

          {/* 6th Line */}
          <CopyToClipboard text="<ADCheckBox height={20} width={20} />">
            <div className={icon}>
              <ADCheckBox height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADCircle height={20} width={20} />">
            <div className={icon}>
              <ADCircle height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADCircleDot height={20} width={20} />">
            <div className={icon}>
              <ADCircleDot height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADSend height={20} width={20} />">
            <div className={icon}>
              <ADSend height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADStarFilled height={20} width={20} />">
            <div className={icon}>
              <ADStarFilled height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADRectangle height={20} width={20} />">
            <div className={icon}>
              <ADRectangle height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADCloudFilled height={20} width={20} />">
            <div className={icon}>
              <ADCloudFilled height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADSendOutline height={20} width={20} />">
            <div className={icon}>
              <ADSendOutline height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADStarOutline height={20} width={20} />">
            <div className={icon}>
              <ADStarOutline height={20} width={20} />
            </div>
          </CopyToClipboard>

          {/* 7th Line */}
          <CopyToClipboard text="<ADIncomingCall height={20} width={20} />">
            <div className={icon}>
              <ADIncomingCall height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADComment height={20} width={20} />">
            <div className={icon}>
              <ADComment height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADSms height={20} width={20} />">
            <div className={icon}>
              <ADSms height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADNotification height={20} width={20} />">
            <div className={icon}>
              <ADNotification height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADProfile height={20} width={20} />">
            <div className={icon}>
              <ADProfile height={30} width={30} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADOutgoingCall height={20} width={20} />">
            <div className={icon}>
              <ADOutgoingCall height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADGraph height={20} width={20} />">
            <div className={icon}>
              <ADGraph height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADMenu height={20} width={20} />">
            <div className={icon}>
              <ADMenu height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADCrossRounded height={20} width={20} />">
            <div className={icon}>
              <ADCrossRounded height={30} width={30} />
            </div>
          </CopyToClipboard>

          {/* 8th Line */}
          <CopyToClipboard text="<ADBack height={20} width={20} />">
            <div className={icon}>
              <ADBack height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADCustomerCare height={20} width={20} />">
            <div className={icon}>
              <ADCustomerCare height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADAddCard height={20} width={20} />">
            <div className={icon}>
              <ADAddCard height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADAddAccount height={20} width={20} />">
            <div className={icon}>
              <ADAddAccount height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADCheckMarkOutline height={20} width={20} />">
            <div className={icon}>
              <ADCheckMarkOutline height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADEdit height={20} width={20} />">
            <div className={icon}>
              <ADEdit height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADUpArrow height={20} width={20} />">
            <div className={icon}>
              <ADUpArrow height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADLeftArrow height={20} width={20} />">
            <div className={icon}>
              <ADLeftArrow height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADRightArrow height={20} width={20} />">
            <div className={icon}>
              <ADRightArrow height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADClip height={20} width={20} />">
            <div className={icon}>
              <ADClip height={30} width={30} />
            </div>
          </CopyToClipboard>

          {/* 9th Line */}
          <CopyToClipboard text="<ADLoading height={20} width={20} />">
            <div className={icon}>
              <ADLoading height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADFrame height={20} width={20} />">
            <div className={icon}>
              <ADFrame height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADCard height={20} width={20} />">
            <div className={icon}>
              <ADCard height={28} width={28} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADVan height={20} width={20} />">
            <div className={icon}>
              <ADVan height={25} width={30} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADUTurn height={20} width={20} />">
            <div className={icon}>
              <ADUTurn height={27} width={27} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADArrRight height={20} width={20} />">
            <div className={icon}>
              <ADArrRight height={25} width={28} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADCart height={20} width={20} />">
            <div className={icon}>
              <ADCart height={20} width={20} />
            </div>
          </CopyToClipboard>
        </div>
      </section>

      {/* Social */}
      <section className="mt-5">
        <h2 className="mb-5 text-2xl">New Icon Set/ Social</h2>
        <div className="flex flex-wrap items-center gap-5">
          <CopyToClipboard text="<ADGoogle height={20} width={20} />">
            <div className={icon}>
              <ADGoogle height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADFacebook height={20} width={20} />">
            <div className={icon}>
              <ADFacebook height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADTwitter height={20} width={20} />">
            <div className={icon}>
              <ADTwitter height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADApple height={20} width={20} />">
            <div className={icon}>
              <ADApple height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADEmail height={20} width={20} />">
            <div className={icon}>
              <ADEmail height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADFilledFacebook height={20} width={20} />">
            <div className={icon}>
              <ADFilledFacebook height={25} width={28} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADFilledTwitter height={20} width={20} />">
            <div className={icon}>
              <ADFilledTwitter height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADPinterest height={20} width={20} />">
            <div className={icon}>
              <ADPinterest height={20} width={20} />
            </div>
          </CopyToClipboard>
        </div>
      </section>

      {/* Social */}
      <section className="mt-5">
        <h2 className="mb-5 text-2xl">Status Icons</h2>
        <div className="flex flex-wrap items-center gap-5">
          <CopyToClipboard text="<ADTrash height={20} width={20} color={'#FF6666'} />">
            <div className={icon}>
              <ADTrash height={20} width={20} color="#FF6666" />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADInfo height={20} width={20} />">
            <div className={icon}>
              <ADInfo height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADEdit height={20} width={20} />">
            <div className={icon}>
              <ADEdit height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADTrash height={20} width={20}  />">
            <div className={icon}>
              <ADTrash height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADPlusCircle height={20} width={20} />">
            <div className={icon}>
              <ADPlusCircle height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADArrowMultipllcation height={15} width={15} />">
            <div className={icon}>
              <ADArrowMultipllcation height={15} width={15} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADUpArrow height={20} width={20} />">
            <div className={icon}>
              <ADUpArrow height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="<ADArrowDown height={20} width={20} /> width={15} />">
            <div className={icon}>
              <ADArrowDown height={20} width={20} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADPlus height={15} width={15} />">
            <div className={icon}>
              <ADPlus height={15} width={15} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADNotification height={20} width={20} />">
            <div className={icon}>
              <ADNotification height={20} width={20} />
            </div>
          </CopyToClipboard>
        </div>

        {/* Check Box */}
        <div className="mt-5 flex items-center gap-5">
          <CopyToClipboard text=" <ADRectangle height={20} width={20} />">
            <div className={icon}>
              <ADRectangle height={20} width={20} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text=" <ADCheckBox height={20} width={20} color={'#0B80CC'} />">
            <div className={icon}>
              <ADCheckBox height={20} width={20} color={'#0B80CC'} />
            </div>
          </CopyToClipboard>
        </div>

        {/* Round btn */}
        <div className="mt-5 flex items-center gap-5">
          <CopyToClipboard text=" <ADCheck height={20} width={20} color={'#2AAC27'} />">
            <div className={icon}>
              <ADCheck height={20} width={20} color={'#2AAC27'} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text=" <ADCrossRounded height={28} width={28} color={'#FF6666'} />">
            <div className={icon}>
              <ADCrossRounded height={28} width={28} color={'#FF6666'} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text=" <ADCircle height={20} width={20} />">
            <div className={icon}>
              <ADCircle height={20} width={20} />
            </div>
          </CopyToClipboard>
        </div>

        {/* Images */}
        <div className="mt-5 flex items-center gap-5">
          <CopyToClipboard text=" <ADCheck height={35} width={35}  />">
            <div className={icon}>
              <ADImageGray height={35} width={35} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADEmailCircle height={18} width={18} />">
            <div className={icon}>
              <ADEmailCircle height={18} width={18} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADDocCircle height={18} width={18} />">
            <div className={icon}>
              <ADDocCircle height={18} width={18} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADPrinterCircle height={18} width={18} />">
            <div className={icon}>
              <ADPrinterCircle height={18} width={18} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADCheckCircle height={35} width={35} />">
            <div className={icon}>
              <ADCheckCircle height={35} width={35} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADBarCode height={35} width={35} />">
            <div className={icon}>
              <ADBarCode height={35} width={35} />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="<ADVisaSmall height={40} width={40} />">
            <div className={icon}>
              <ADVisaSmall height={40} width={40} />
            </div>
          </CopyToClipboard>
        </div>

        {/* Cards */}
        <div className="mt-5 flex items-center gap-5">
          <CopyToClipboard text="  <ADVisa height={53} width={50} />">
            <div className={icon}>
              <ADVisa height={53} width={50} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADDiscover height={35} width={35}  />">
            <div className={icon}>
              <ADDiscover height={35} width={35} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADMasterCard height={35} width={35} />">
            <div className={icon}>
              <ADMasterCard height={35} width={35} />
            </div>
          </CopyToClipboard>

          <CopyToClipboard text=" <ADBarCode height={35} width={35} />">
            <div className={icon}>
              <ADAmericanEx height={35} width={35} />
            </div>
          </CopyToClipboard>
        </div>
      </section>
    </section>
  );
};

export default Icons;
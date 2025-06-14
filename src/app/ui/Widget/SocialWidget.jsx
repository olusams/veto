import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='/' className="cs-center cs-social_btn_facebook">
        <Icon icon="fa6-brands:facebook-f" />
      </Link>
      <Link href='/' className="cs-center cs-social_btn_tiktok">
        <Icon icon="fa6-brands:tiktok" />
      </Link>
      <Link href='/' className="cs-center cs-social_btn_instagram">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href='/' className="cs-center cs-social_btn_github">
        <Icon icon="fa6-brands:github" />
      </Link>
    </Div>
  )
}

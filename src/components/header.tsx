import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <div>
      <Link href={'/sign-up'}>signup</Link>
      <Link href={'/sign-in'}>signin</Link>
    </div>
  )
}

export default header

import React from 'react'

const PreviewContainer = () => {
  return (
        <div className="pt-20">
            <div className="text-center items-center justify-center content-center flex">
            <div className="text-black text-xl font-bold bg-gradient-to-br from-[#7928CA] to-[#FF0080] h-10 w-10 rounded-full align-baseline">2</div>
            </div>
            <div className="text-center items-center justify-center content-center flex">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#7928CA] to-[#FF0080]">Preview</div>
            </div>
            <h1 className="font-bold text-[6rem] text-white text-center">Accelerate with your team</h1>
            <p className="text-slate-400 text-xl text-center justify-start">
            Frontend development is not meant to be a solo activity. The Vercel platform makes it<br></br>
            a collaborative experience with deploy previews for every code change, by seamlessly integrating<br></br>
            with GitHub, GitLab, and Bitbucket.
            </p>
        </div>
  )
}

export default PreviewContainer

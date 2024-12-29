
const Footer = () => {
  return (
    <>
        <div className="bg-green-600 fixed bottom-0 w-full ">
            <div className="mx-7 px-2 text-xl py-5 border-b">
                FIND YOUR FUTURE BOOKS AT GR BOOKS <span className="text-sm flex  items-center">Here you can buy your loved books at low price</span>
            </div>
            <div className="mx-7 my-2 border-b">
              <div className="pl-2 text-2xl">Get Know About Me Online</div>
              <div className="px-7 py-3"><span className="font-bold">Discover Your Next Great Read at Book Hive</span> <br />
              <span className="px-7">
                Your Favorite Online Bookstore At BookHive, we believe every story deserves a reader. Whether you're into gripping Fiction, inspiring Biographies, thrilling Mysteries, imaginative Sci-Fi, captivating Manga, or heartwarming Young Adult tales, we've got something for everyone. Explore our collection of bestselling titles, timeless classics, and hidden gems.
              </span><br />
              <span className="font-semibold">Looking for a personalized experience?</span>
              <span className=""> Our curated recommendations will help you uncover books tailored to your taste. Don’t miss out on our kids’ collection, featuring beloved classics like Harry Potter and modern hits like The Wings of Fire series.</span></div>
              <div className="mx-7 mb-2 font-bold"><a className="flex justify-center items-center" target="blank" href="https://like-a-hacker.github.io/My-Portfolio/">My Portfolio &nbsp;<i className="flex items-center h-1 bi bi-box-arrow-up-right"></i></a></div>
            </div>
            <div className="mx-7 px-2 flex justify-around pb-6 my-3 border-b">
              <div className="w-1/5">
                <ul className="text-sm flex justify-center flex-col items-start">
                  <li className="font-semibold text-xl mb-2">About Us</li>
                  <li><a className="text-sm" target="blank" href="https://like-a-hacker.github.io/My-Portfolio/">My Portfolio</a></li>
                  <li>Careers</li>
                  <li>Say hello</li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul className="text-sm flex justify-center flex-col items-start">
                  <li className="font-semibold text-xl mb-2">Quick Help</li>
                  <li>Help Center</li>
                  <li>Shipping</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul className="text-sm flex justify-center flex-col items-start">
                  <li className="font-semibold text-xl mb-2">Shop By Catogory</li>
                  <li>Books</li> 
                  <li>Fiction</li> 
                  <li>Nonfiction</li> 
                  <li>eBooks</li> 
                  <li>Audiobooks</li> 
                  <li>Kids</li> 
                </ul>
              </div>
              <div className=" w-2/5 font-semibold flex flex-col items-center">
                Follow Us
                <div className="">
                  <div className="flex gap-2 mt-2">
                    <a href="https://github.com/like-a-hacker/"><i className="bi bi-github hover:text-white"></i></a>
                    <a href="https://www.linkedin.com/in/gowtham--r/"><i className="bi bi-linkedin hover:text-white"></i></a>
                    <a href="https://www.instagram.com/gowtham__ramesh_03/"><i className="bi bi-instagram hover:text-white"></i></a>
                  </div>
                </div>
              </div>
              <div className="flex w-3/5 flex-col items-start">
                <div className="mb-2 font-semibold text-xl">Stay in touch</div>
                <div className="flex items-center">
                  <input className="px-2 outline-none" type="email" name="" placeholder="Email Address" id="" />
                  <i className="bi bi-arrow-right-square-fill text-2xl"></i>
                </div>
                <div className="">submit your Email Address to know more updates.</div>
              </div>
              
            </div>
            <div className="flex justify-center items-center">
              Developed By <div className="kaushan">&nbsp;Gowtham Ramesh</div>
            </div>
        </div>
    </>
  )
}

export default Footer
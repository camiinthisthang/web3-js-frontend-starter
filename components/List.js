/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

export default function List({handle, following, followers, posts, imageURL}) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li
          key={handle}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={imageURL} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{handle}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Total Followers</dt>
              <dd className="text-gray-500 text-sm">{followers}</dd>
              <dt className="sr-only">Total Following</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {following}
                </span>
              </dd>
            </dl>
          </div>
          <div>
          </div>
        </li>
    </ul>
  )
}

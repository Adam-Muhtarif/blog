import dateFormat from "dateformat";

export default function BlogAuthor({ author }) {
  return (
    <div className="basis-1/4 bg-white rounded-md h-fit">
      <div className="bg-gray-900 rounded-t-md h-8"></div>
      <div className="px-5">
        <div className="flex items-end space-x-2">
          <div className="h-12 w-12">
            <img className="rounded-full" src={author.avatar} alt="avatar" />
          </div>
          <h4 className="font-bold text-xl">{`${author.firstName} ${author.secondName}`}</h4>
        </div>
        <div className="py-2 space-y-1.5">
          {author.bio && (
            <div>
              <h3 className="font-bold text-gray-500 pt-3">Bio</h3>
              <p>{author.bio}</p>
            </div>
          )}

          {author.location && (
            <div>
              <h3 className="font-bold text-gray-500">Location</h3>
              <h3>{author.location}</h3>
            </div>
          )}
          {author.work && (
            <div>
              <h3 className="font-bold text-gray-500">Work</h3>
              <h3>{author.work}</h3>
            </div>
          )}
          <div>
            <h3 className="font-bold text-gray-500">Joined</h3>
            <h3>{dateFormat(author.joinDate, "d mmm yyyy")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

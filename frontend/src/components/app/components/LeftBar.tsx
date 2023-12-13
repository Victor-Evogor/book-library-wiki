import { useMemo, memo, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineRectangleStack,
  HiOutlineTag,
} from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiTeamIdea } from "react-icons/gi";
import useCreateDispatcher from "../../../redux/useCreateDispatcher";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/Store";

interface LeftBarProps {
    showLeftbar: true
}

const Leftbar:FunctionComponent<LeftBarProps> = memo(({ showLeftbar }) => {

  const dispatch = useCreateDispatcher()
  const isModalOpen = useSelector<Store, boolean>((state) => state.isModalOpen)
    // mock user 
    const user = {
        role: 'general'
    }

    const joinedCommunities = [{
      name: 'coomm1'
    }]
  
    const visibleCommunities = useMemo(() => {
    return joinedCommunities?.slice(0, 5);
  }, [joinedCommunities]);

  const communityLinks = useMemo(() => {
    return visibleCommunities?.map((community) => ({
      href: `/community/${community.name}`,
      label: community.name,
    }));
  }, [visibleCommunities]);

  return (
    <div className={`${showLeftbar ? "" : "hidden"} leftbar`}>
      <div className="flex flex-col justify-start items-center">
        <div className="flex flex-col items-start gap-4 w-full p-5">
          <Link
            className="flex items-center gap-2 text-lg font-medium hover:text-primary"
            to="/app/home"
          >
            <HiOutlineHome className="text-xl" />
            <p>Home</p>
          </Link>
          <Link
            className="flex items-center gap-2 text-lg font-medium hover:text-primary"
            to="/app/profile"
          >
            <HiOutlineUserCircle className="text-xl" />
            <p>Profile</p>
          </Link>
          <Link
            className="flex items-center gap-2 text-lg font-medium hover:text-primary"
            to="/saved"
          >
            <HiOutlineTag className="text-xl" />
            <p>Saved</p>
          </Link>

          {user && user.role === "general" && (
            <Link
              className="flex items-center gap-2 text-lg font-medium hover:text-primary"
              to="/following"
            >
              <HiOutlineRectangleStack className="text-xl" />
              <p>Following</p>
            </Link>
          )}

          <hr className="w-full my-4 border-gray-300" />

          {communityLinks && communityLinks.length > 0 ? (
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 font-medium items-center">
                  <HiOutlineUserGroup className="text-xl" />
                  Communities
                </div>

                <Link
                  className="flex relative items-center text-sm font-medium text-primary mr-4"
                  to="/my-communities"
                >
                  See all
                  <p className="absolute -top-2 -right-4 text-white text-xs bg-primary w-4 h-4 rounded-full flex justify-center items-center">
                    {" "}
                    {joinedCommunities.length}
                  </p>
                </Link>
              </div>
              <ul className="w-full mt-3">
                {communityLinks.map((communityLink) => (
                  <li key={communityLink.href}>
                    <Link
                      className="flex items-center hover:text-primary text-gray-600 font-medium gap-2 py-1"
                      to={communityLink.href}
                    >
                      {communityLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>No communities found.</div>
          )}
          {user && user.role === "general" && (
            <div className="md:hidden">
              <hr className="w-full my-4 border-gray-300" />
              <div className="flex justify-center gap-1 items-center">
                <GiTeamIdea />
                <Link to="/communities" className="text-primary font-medium">
                  See all communities
                </Link>
              </div>
            </div>
          )}
        </div>
        <button onClick={()=>{
          
          dispatch({
            type: 'is-modal-open/toggle',
            payload: !isModalOpen
          })
          dispatch({
            type: 'modal-content',
            payload: 'create-wiki'
          })
        }}>Create a Wiki Post</button>
      </div>
    </div>
  );
});

export default Leftbar;

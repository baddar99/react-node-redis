import axios from "axios";
import InputSearch from "./InputSearch";
// import ResultItem from './ResultItem.vue'
// import History from './History.vue'
// import Panel from './Panel.vue'
// import { storeLastNonCached } from '@/storage'

function Layout() {
  return (
    <>
      <InputSearch />
      <div className="example">
        <div className="note">
          Note: After you search for a github account, click "Search again" to
          see Redis caching in action.
        </div>
        <div className="how-it-works">
          <div className="how-it-works__header">How it works</div>
          <div className="how-it-works__content">
            This app returns the number of repositories a Github account has.
            When you first search for an account, the server calls Github's API
            to return the response. This can take 100s of milliseconds. The
            server then adds the details of this slow response to Redis for
            future requests. When you search again, the next response comes
            directly from Redis cache instead of calling Github. The responses
            are usually usually in a millisecond or so making it blazing fast.
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;

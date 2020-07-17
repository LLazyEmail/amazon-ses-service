import React from 'react';
import ManageCampaignsBox from '../../containers/campaigns/ManageCampaignsBox';

const ManageCampaigns = (props) => {
  return (
    <div>
      <div className="content-header">
        <h1>Manage campaigns
          <small>Edit or delete your campaigns here</small>
        </h1>
      </div>

      <section className="content">
        <ManageCampaignsBox history={props.history} />
      </section>
    </div>
  );
};

export default ManageCampaigns;

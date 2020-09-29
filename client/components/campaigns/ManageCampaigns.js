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
        <div className="container-fluid">
          <ManageCampaignsBox history={props.history} />
        </div>
      </section>
    </div>
  );
};

export default ManageCampaigns;

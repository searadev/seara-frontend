import './styles.css';

type Props = {
  authority: string;
};

const RoleBadge = ({ authority }: Props) => {
  return <div className="role-badge-container">{authority}</div>;
};

export default RoleBadge;

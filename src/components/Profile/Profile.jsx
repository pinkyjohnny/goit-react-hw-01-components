import { ProfileCard, ProfileDescription, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsItem, ProfileStatsLabel, ProfileStatsQuantity } from './Profile.styled'

export const Profile = ({ user }) => {
    return <ProfileCard>
  <ProfileDescription>
    <ProfileAvatar
      src={user.avatar}
      alt="User avatar"
    />
    <ProfileName>{user.username}</ProfileName>
    <ProfileTag>@{user.tag}</ProfileTag>
    <ProfileLocation>{user.location}</ProfileLocation>
  </ProfileDescription>

  <ProfileStats>
    <ProfileStatsItem>
      <ProfileStatsLabel>Followers</ProfileStatsLabel>
      <ProfileStatsQuantity>{user.stats.followers}</ProfileStatsQuantity>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <ProfileStatsLabel>Views</ProfileStatsLabel>
      <ProfileStatsQuantity>{user.stats.views}</ProfileStatsQuantity>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <ProfileStatsLabel>Likes</ProfileStatsLabel>
      <ProfileStatsQuantity>{user.stats.likes}</ProfileStatsQuantity>
    </ProfileStatsItem>
  </ProfileStats>
</ProfileCard>
}
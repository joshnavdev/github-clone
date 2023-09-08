import {
  ActionIcon,
  CodeReviewIcon,
  CodeSpaceIcon,
  CopilotIcon,
  DiscussionIcon,
  IssueIcon,
  PackageIcon,
  SecurityIcon,
} from '../../../components/Icons';
import Link from '../../../components/Link';
import Paper from '../../../components/Paper';

const ProductDropdown = () => {
  return (
    <Paper width={500}>
      <div className="pl-6 pr-12 border-r border-r-gray-1">
        <ul>
          <Link href="/actions" primary="Actions" secondary="Automate any workflow" Icon={ActionIcon} />
          <Link href="/packages" primary="Packages" secondary="Host and manage packages" Icon={PackageIcon} />
          <Link href="/security" primary="Security " secondary="Find and fix vulnerabilities" Icon={SecurityIcon} />
          <Link href="/codespaces" primary="Codespaces" secondary="Instant dev environments" Icon={CodeSpaceIcon} />
          <Link href="/copilot" primary="Copilot" secondary="Write better code with AI" Icon={CopilotIcon} />
          <Link href="/code-review" primary="Code Review" secondary="Manage code changes" Icon={CodeReviewIcon} />
          <Link href="/issues" primary="Issues" secondary="Plan and track work" Icon={IssueIcon} />
          <Link
            href="/discussions"
            primary="Discussions"
            secondary="Collaborate outside of code"
            Icon={DiscussionIcon}
          />
        </ul>
      </div>
      <div className="px-6">
        <h1 className="text-base font-semibold leading-6">Explore</h1>
        <ul>
          <Link href="/" secondary="All features" tight />
          <Link href="/" secondary="Documentation" tight external />
          <Link href="/" secondary="GitHub Skills" tight external />
          <Link href="/" secondary="Blog" tight external />
        </ul>
      </div>
    </Paper>
  );
};

export default ProductDropdown;

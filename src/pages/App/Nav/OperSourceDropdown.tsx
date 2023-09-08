import Link from '../../../components/Link';
import Paper from '../../../components/Paper';

const OpenSourceDropdown = () => {
  return (
    <Paper width={300}>
      <div className="px-6 w-full">
        <div className="border-b border-gray-300 pb-4 mb-4">
          <Link href="/" primary="GitHub Sponsors" secondary="Fund open source developers" tight />
        </div>
        <div className="border-b border-gray-300 pb-4 mb-4">
          <Link href="/" primary="The ReadME Project" secondary="GitHub community articles" tight />
        </div>
        <div>
          <h1 className="text-base font-semibold leading-6">Repositories</h1>
          <ul>
            <Link href="/" secondary="Topics" tight />
            <Link href="/" secondary="Trending" tight />
            <Link href="/" secondary="Collections" tight />
          </ul>
        </div>
      </div>
    </Paper>
  );
};

export default OpenSourceDropdown;

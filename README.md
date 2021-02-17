**How do we invoke tests?**
1. First we start an AWS EC2 instance with the following configuration for each one of you:
    * Ubuntu 18 64 bit (x86)
    * t2.small (1vcpu, 2GB RAM)
   
    Kindly stick to the same configuration. 
2. We copy score_generate.py, run_on_remote.sh files to the home directory of the EC2 instance.
   `/home/ubuntu/` will now contain score_generate.py and run_on_remote.sh with executable permission. See the attached screenshot in the repo.
   
3. We run run_on_remote.sh after setting the environment variable:
    * `export usr=dushyant`
    * `./run_on_remote.sh`

4. Once the runs complete, we collect the logs back.

**Where do we see learners going wrong?**
1. Good chunk of you haven't taken care of dependencies correctly. So your localhost is not running.
   We spot checked few cases and it was a case of missed npm installation etc.
   Once we installed it, things seemed to work. But it is hard for a machine to figure these out!
   
2. Some of you don't have a clean DB state resulting in the first request itself failing.

**Next Steps**

We are extremely happy to see you all put in so much effort and they seem to go in vain
because you didn't get the test scripts right.

So we giving you the option to ensure your scripts conform to our assessment seemed the right thing to do. So here you go - 

1. You have time till **_Feb 17th 11:59PM_** to fix the following files:
   * `install.sh`
   * `sleep.sh`
   * `server_run.sh`
   
2. We'll be cherry-picking only these files from your latest submissions and run assessment on your old code.

3. It is totally okay to share/discuss these files among your peers.

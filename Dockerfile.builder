FROM debian:latest

# Get latest updates for the OS
RUN apt update
RUN apt upgrade -y

# Install Apache Httpd
RUN apt install apache2 -y

# Set Allow Override to all - this allows .htaccess files to work
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

# Starts and tails the output of Apache Httpd
CMD ["apache2ctl", "-D",  "FOREGROUND"]
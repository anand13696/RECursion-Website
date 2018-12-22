Rails.application.config.middleware.use OmniAuth::Builder do 
	provider :facebook, '2301278820118989', '9af440eb6e7abb61c00e0ed3b3bc3f08', image_size: 'large', scope: 'email'
	provider :github, '3f95a927b2d6744a2c28', 'd40c884569ec1d052c32e747a115526858146a05'
	OmniAuth.config.logger = Rails.logger
	provider :google_oauth2, '240996908487-o3toldjrdtgi1f0qu3obdr4ie95mjd6q.apps.googleusercontent.com', 'OwHqRt1wbKpDWMZ2l3Dy9Bgh', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
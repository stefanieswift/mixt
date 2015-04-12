enable :sessions

get '/' do
  if session[:user_id].nil?
    erb :index
  else
    erb :welcome
  end
end

get '/user/new' do
  erb :sign_up
end

post '/user/logged_in' do
  @user = User.where(username: params[:username])
  session[:user_id] = @user.id
  redirect '/'
end

post '/user/signed_up' do
  @user = User.create(name: params[:name], email: params[:email], username: params[:username], password: params[:password_hash])
  session[:user_id] = @user.id
  redirect '/'
end

post '/user/logged_out' do
 session[:user_id] = nil
 redirect '/'
end


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

get '/user/new/valid_email' do
  erb :sign_up_email
end

get '/user/new/valid_username' do
  erb :sign_up_username
end

post '/user/logged_in' do
 @user = User.where(username: params[:username]).first
  if @user && @user.password_hash == params[:password]
    session[:user_id] = @user.id
    redirect '/'
  else
     redirect '/errors'
  end
end

get '/errors' do
  erb :error
end

post '/user/signed_up' do
  @user = User.new(name: params[:name], email: params[:email], username: params[:username], password_hash: params[:password])
  if @user.save
    session[:user_id] = @user.id
    redirect '/'
  else
    redirect '/user/new/valid_email'
  end
end

get '/user/logged_out' do
 session[:user_id] = nil
 redirect '/'
end

get '/user/:id' do
  redirect '/'
end

get '/user/:id/account' do
  redirect '/'
end
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../redux/modules/authSlice";
import { authApi } from "../redux/modules/index-api";
import { Container } from "../styles/DetailStyle";
import {
  BigButton,
  ButtonsWrapper,
  InputTags,
  LoginTag,
  LoginWrapper,
  SmallButton,
} from "../styles/LoginStyle";

function Login() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const [loginToggle, setLoginToggle] = useState(true);

  const [status, setStatus] = useState("아직 인증 안됨");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getLoginUser = async () => {
  //     const accessToken = cookies.get("accessToken");
  //     if (!accessToken) {
  //       return;
  //     }
  //     const response = await authApi.get(`/user`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     console.log(response);
  //     dispatch(getLoginUser(response));
  //   };
  //   getLoginUser();
  // });

  const handleSignup = async () => {
    try {
      if (!id || !password || !nickname) {
        return alert("빈칸을 모두 입력해주세요");
      }

      const { data } = await authApi.post(`/register`, {
        id,
        password,
        nickname,
      });
      const { accessToken, avatar, nickname, userId } = data;

      if (data.success) {
        dispatch(login({ accessToken, avatar, nickname, userId }));
        toast.success("회원가입 성공");
      }

      setId("");
      setPassword("");
      setNickname("");
      navigation(`/`);
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message);
      navigation(`/login`);
    }
  };

  const handleLogin = async () => {
    try {
      if (!id || !password) {
        return alert("빈칸을 모두 입력해주세요");
      }
      const { data } = await authApi.post(`/login`, {
        id,
        password,
      });
      const { accessToken, avatar, nickname, userId } = data;
      setId("");
      setPassword("");
      if (data.success) {
        dispatch(login({ accessToken, avatar, nickname, userId }));
        toast.success("로그인 성공!");
      }
      navigation(`/`);
    } catch (error) {
      toast.error(error.response.data.message);
      navigation(`/login`);
    }
  };

  // const getData = async () => {
  //   const assessToken = cookies.get(`assessToken`);
  //   const response = await axios.get(`${BASE_URL}/letters`, {});
  //   setData(response.data.data);
  // };

  return (
    <>
      <Container>
        {loginToggle && (
          <LoginWrapper>
            <LoginTag>로그인</LoginTag>
            <InputTags>
              <input
                type="text"
                placeholder="아이디 (4~10글자)"
                minLength={4}
                maxLength={10}
                onChange={(event) => {
                  setId(event.target.value);
                }}
                value={id}
              />
              <input
                type="password"
                placeholder="비밀번호 (4~15글자)"
                minLength={4}
                maxLength={15}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </InputTags>
            <ButtonsWrapper>
              <BigButton onClick={handleLogin}>로그인</BigButton>
              <SmallButton onClick={() => setLoginToggle(false)}>
                회원가입
              </SmallButton>
            </ButtonsWrapper>
          </LoginWrapper>
        )}

        {!loginToggle && (
          <LoginWrapper>
            <LoginTag>회원가입</LoginTag>
            <InputTags>
              <input
                type="text"
                placeholder="아이디 (4~10글자)"
                minLength={4}
                maxLength={10}
                value={id}
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
              <input
                type="password"
                placeholder="비밀번호 (4~15글자)"
                minLength={4}
                maxLength={15}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="닉네임 (1~10글자)"
                minLength={1}
                maxLength={10}
                value={nickname}
                onChange={(event) => {
                  setNickname(event.target.value);
                }}
              />
            </InputTags>
            <ButtonsWrapper>
              <BigButton onClick={handleSignup}>회원가입</BigButton>
              <SmallButton onClick={() => setLoginToggle(true)}>
                로그인
              </SmallButton>
            </ButtonsWrapper>
          </LoginWrapper>
        )}
      </Container>
    </>
  );
}

export default Login;

import React, { Component } from "react";
import styled from "styled-components";
import { Field, InjectedFormProps } from "redux-form";
import { Input } from "../../components";
import { HelperContainer } from "../../containers";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  max-width: 768px;
`;

const ValuePropContainer = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #382a5fa3;
  margin-top: 20px;
  font-family: "Source Code Pro", monospace;
  margin-bottom: 40px;

  a {
    font-family: "Source Code Pro", monospace;
    color: #382b5f;
  }
`;

const HumanTextWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-left: 20px;
  font-weight: bold;
  color: #382b5f;
  font-size: 22px;
  align-items: center;
  font-family: monospace;
`;

const HumanText = styled.div``;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: #fff;
  border: 1px solid #e9e4f7;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  margin: 0 0 1rem;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  padding: 40px;
`;

interface HomeProps {
  getCronHumanExpression: Function;
  focusOnCronExpressionInput: Function;
}

interface CronConfigFormValues {
  cronExpression: string;
}

export default class Home extends Component<
  any & InjectedFormProps<CronConfigFormValues> & HomeProps
> {
  componentDidMount() {
    const {
      focusOnCronExpressionInput,
      getCronHumanExpression,
      cronExpressionValue
    } = this.props;
    focusOnCronExpressionInput();
    getCronHumanExpression(cronExpressionValue);
  }

  render() {
    const { getCronHumanExpression, humanExpression } = this.props;

    return (
      <InnerContainer>
        <ValuePropContainer>
          Cron expression generator by{" "}
          <a href="https://cronhub.io?ref=crontab" rel="nofollow" title="">
            Cronhub
          </a>
        </ValuePropContainer>
        <Wrapper>
          <Field
            name="cronExpression"
            component="input"
            type="text"
            autoFocus
            onChange={event =>
              getCronHumanExpression(event && event.target.value)
            }
          />
          <HumanTextWrapper>
            <HumanText>{humanExpression}</HumanText>
          </HumanTextWrapper>
        </Wrapper>

        <HelperContainer />
      </InnerContainer>
    );
  }
}

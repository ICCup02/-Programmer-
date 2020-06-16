#ifndef TST_TESTGOOGLE_H
#define TST_TESTGOOGLE_H

#include <gtest/gtest.h>
#include <gmock/gmock-matchers.h>

using namespace testing;

TEST(Calculator, TestGoogle)
{
    EXPECT_EQ(1, 1);
    ASSERT_THAT(0, Eq(0));
}

#endif // TST_TESTGOOGLE_H
